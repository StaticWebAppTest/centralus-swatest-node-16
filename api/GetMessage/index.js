module.exports = async function (context, req) {
  const date = "2022-04-23T08:14:23.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

