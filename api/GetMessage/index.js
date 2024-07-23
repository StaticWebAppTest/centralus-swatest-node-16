module.exports = async function (context, req) {
  const date = "2024-07-23T17:09:42.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

