module.exports = async function (context, req) {
  const date = "2023-12-07T15:09:46.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

