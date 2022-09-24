module.exports = async function (context, req) {
  const date = "2022-09-24T18:15:36.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

