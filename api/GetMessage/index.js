module.exports = async function (context, req) {
  const date = "2023-09-12T11:07:08.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

