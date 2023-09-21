module.exports = async function (context, req) {
  const date = "2023-09-21T15:07:52.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

