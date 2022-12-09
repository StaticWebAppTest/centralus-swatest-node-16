module.exports = async function (context, req) {
  const date = "2022-12-09T15:09:33.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

