module.exports = async function (context, req) {
  const date = "2023-05-23T18:10:42.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

