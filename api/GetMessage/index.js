module.exports = async function (context, req) {
  const date = "2022-09-07T13:45:37.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

