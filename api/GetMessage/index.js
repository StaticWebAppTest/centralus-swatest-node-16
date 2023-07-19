module.exports = async function (context, req) {
  const date = "2023-07-19T15:09:07.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

