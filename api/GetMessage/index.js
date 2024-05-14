module.exports = async function (context, req) {
  const date = "2024-05-14T13:11:03.691Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

