module.exports = async function (context, req) {
  const date = "2023-07-27T18:10:44.196Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

