module.exports = async function (context, req) {
  const date = "2023-03-16T20:10:23.691Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

