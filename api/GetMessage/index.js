module.exports = async function (context, req) {
  const date = "2022-07-27T06:14:02.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

