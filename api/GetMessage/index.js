module.exports = async function (context, req) {
  const date = "2023-11-04T04:10:27.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

