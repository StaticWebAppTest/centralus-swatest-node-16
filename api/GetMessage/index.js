module.exports = async function (context, req) {
  const date = "2023-03-20T14:10:23.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

