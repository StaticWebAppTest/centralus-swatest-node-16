module.exports = async function (context, req) {
  const date = "2023-05-08T04:11:02.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

