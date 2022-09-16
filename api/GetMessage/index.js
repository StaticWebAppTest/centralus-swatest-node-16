module.exports = async function (context, req) {
  const date = "2022-09-16T18:16:04.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

