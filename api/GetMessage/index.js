module.exports = async function (context, req) {
  const date = "2022-09-24T17:16:56.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

