module.exports = async function (context, req) {
  const date = "2022-10-15T06:24:25.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

