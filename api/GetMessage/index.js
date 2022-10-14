module.exports = async function (context, req) {
  const date = "2022-10-14T20:14:03.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

