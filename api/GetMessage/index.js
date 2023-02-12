module.exports = async function (context, req) {
  const date = "2023-02-12T18:11:19.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

