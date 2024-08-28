module.exports = async function (context, req) {
  const date = "2024-08-28T11:09:23.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

