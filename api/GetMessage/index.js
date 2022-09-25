module.exports = async function (context, req) {
  const date = "2022-09-25T18:15:17.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

