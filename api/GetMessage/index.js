module.exports = async function (context, req) {
  const date = "2022-10-13T12:27:06.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

