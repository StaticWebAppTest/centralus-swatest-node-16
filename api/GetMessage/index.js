module.exports = async function (context, req) {
  const date = "2022-04-21T06:13:07.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

