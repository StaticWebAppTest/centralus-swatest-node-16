module.exports = async function (context, req) {
  const date = "2023-11-23T20:09:18.540Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

