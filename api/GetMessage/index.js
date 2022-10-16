module.exports = async function (context, req) {
  const date = "2022-10-16T06:21:30.248Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

