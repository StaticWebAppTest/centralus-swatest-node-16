module.exports = async function (context, req) {
  const date = "2022-12-10T20:09:36.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

