module.exports = async function (context, req) {
  const date = "2023-09-30T18:10:19.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

