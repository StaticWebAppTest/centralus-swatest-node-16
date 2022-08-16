module.exports = async function (context, req) {
  const date = "2022-08-16T06:13:33.174Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

