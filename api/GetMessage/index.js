module.exports = async function (context, req) {
  const date = "2022-12-08T10:10:45.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

