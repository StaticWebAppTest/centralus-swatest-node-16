module.exports = async function (context, req) {
  const date = "2022-04-11T13:23:10.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

