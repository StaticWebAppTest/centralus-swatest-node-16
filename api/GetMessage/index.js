module.exports = async function (context, req) {
  const date = "2023-03-04T11:07:44.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

