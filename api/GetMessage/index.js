module.exports = async function (context, req) {
  const date = "2022-11-01T18:15:44.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

