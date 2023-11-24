module.exports = async function (context, req) {
  const date = "2023-11-24T13:11:23.454Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

