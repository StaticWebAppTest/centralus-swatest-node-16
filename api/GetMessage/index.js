module.exports = async function (context, req) {
  const date = "2023-12-11T20:10:27.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

