module.exports = async function (context, req) {
  const date = "2023-05-19T15:08:39.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

