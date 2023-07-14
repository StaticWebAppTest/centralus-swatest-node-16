module.exports = async function (context, req) {
  const date = "2023-07-14T15:09:54.970Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

