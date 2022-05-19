module.exports = async function (context, req) {
  const date = "2022-05-19T07:17:23.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

