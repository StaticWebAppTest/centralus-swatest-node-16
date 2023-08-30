module.exports = async function (context, req) {
  const date = "2023-08-30T23:08:22.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

