module.exports = async function (context, req) {
  const date = "2023-08-16T18:10:11.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

