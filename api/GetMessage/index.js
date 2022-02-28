module.exports = async function (context, req) {
  const date = "2022-02-28T23:10:40.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

