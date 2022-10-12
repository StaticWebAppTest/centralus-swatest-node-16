module.exports = async function (context, req) {
  const date = "2022-10-12T06:26:13.838Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

