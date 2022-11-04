module.exports = async function (context, req) {
  const date = "2022-11-04T13:35:33.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

