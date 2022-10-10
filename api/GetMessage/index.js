module.exports = async function (context, req) {
  const date = "2022-10-10T20:14:23.665Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

