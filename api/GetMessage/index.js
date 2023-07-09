module.exports = async function (context, req) {
  const date = "2023-07-09T18:11:15.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

