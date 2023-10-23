module.exports = async function (context, req) {
  const date = "2023-10-23T15:09:27.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

