module.exports = async function (context, req) {
  const date = "2022-02-24T09:10:19.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

