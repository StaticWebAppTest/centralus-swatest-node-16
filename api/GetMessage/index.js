module.exports = async function (context, req) {
  const date = "2022-03-16T06:12:30.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

