module.exports = async function (context, req) {
  const date = "2023-11-10T06:12:01.454Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

