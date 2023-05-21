module.exports = async function (context, req) {
  const date = "2023-05-21T09:07:57.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

