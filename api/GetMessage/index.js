module.exports = async function (context, req) {
  const date = "2022-03-21T09:10:33.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

