module.exports = async function (context, req) {
  const date = "2022-10-08T23:13:32.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

